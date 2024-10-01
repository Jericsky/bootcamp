/* 1. In the activity folder, create an index.js file and copy the contents from template.js. Read and understand the additional instructions from the template.

2. Create 2 new collections in the database called sales and customers. Insert a mock data for each collection with the following properties:

- sales
    - product - string
    - category - string
    - quantity - number
    - price - number

- customers
    - name - string
    - age - number
    - gender - string
    - region - string
 */

    async function insertSales(db){
        return await (
            db.sales.insertMany([
                {
                    product: "Blueberry Cheesecake",
                    category: "Desert",
                    quantity: 150,
                    price: 500
                },
                {
                    product: "Choco Milk",
                    category: "Drinks",
                    quantity: 230,
                    price: 150
                },
                {
                    product: "Croissant",
                    category: "Pastry",
                    quantity: 30,
                    price: 380
                },
                {
                    product: "Mango Frappe",
                    category: "Drinks",
                    quantity: 85,
                    price: 150
                },
                {
                    product: "Caesar Salad",
                    category: "Salad",
                    quantity: 230,
                    price: 420
                },
            ])
        )
    }
    async function insertCustomers(db){
        return await (
            db.customers.insertMany([
                {
                    name: "Joe Smith",
                    age: 24,
                    gender: "Male",
                    region: "Calabarzon"
                },
                {
                    name: "Jane Kate",
                    age: 12,
                    gender: "Female",
                    region: "NCR"
                },
                {
                    name: "Rui Cruz",
                    age: 25,
                    gender: "Male",
                    region: "Central Luzon"
                },
                {
                    name: "Mae Mae",
                    age: 45,
                    gender: "Female",
                    region: "Calabarzon"
                },
                {
                    name: "Chris Jordan",
                    age: 34,
                    gender: "Male",
                    region: "NCR"
                }
            ])
        )
    }
    
    /* 
    3. Calculate total sales revenue for each product category using $group and $sum.
    */
    async function totalRevenue(db) {
        return await(
            db.sales.aggregate([
                {
                    $project: {
                        category: 1, 
                        totalRevenue: {
                            $multiply: ["$quantity", "$price"]
                        }
                    }
                },
                {
                    $group: {
                        _id: "$category",
                        totalRevenue: {$sum: "$totalRevenue"}
                    }
                }
            ])
        )
    }
    
    /* 
    4. Identify the regions with most sales revenue using $group, $sum, and $sort.
    */
    async function revenuePerRegion(db) {
        return await(
            db.customers.aggregate([
                
                {
                    $group: {
                        _id: "$region",       
                        totalRevenue: { $sum: 1 }  
                    }
                },
                {
                    $sort: {
                        totalRevenue: -1
                    }
                }
                
            ])
            
        )
    }
    
    
    /* 
    5. Analyze customer demographics by age group using $match and $group.
    */
    async function demographicsByAge(db) {
        return await(
            db.customers.aggregate([
                {
                    $match: {
                        age: { $gte: 20 , $lte: 24}
                    }
                },
                {
                    $group: {
                        _id: "$age",
                        count: { $sum: 1 }
                    }
                }
            ])
            
        )
    }    
    
    /* 
    6. Determine average order value using $group and $avg.
        - Look up the use of $avg operator.
    */
    async function orderAverage(db) {
        return await(
            db.sales.aggregate([
                {
                    $group: {
                        _id: null, 
                        totalValue: { $sum: { $multiply: ["$quantity", "$price"] } } 
                    }
                },
                {
                    $group: {
                        _id: null,
                        averageOrderValue: { $avg: "$totalValue" } 
                    }
                }
            ])
            
        );
    }
    
    /* 
    7. Explore product popularity trends over time using $project, $group, and $sort.
        - Look up the use of $dateToString operator.
    */
    async function productPopularity(db) {
        return await(
            console.log("no solution")
        )
    }
    
    
    /* 
    8. Identify outliers in sales data using $project, $match, and $sort.
        - Outliers are data points that are significantly different from the rest of the data.
        - Filter sales with price greater than 1000
    */
    async function salesOutlier(db) {
        return await(
            db.sales.aggregate([
                {
                    $project: {
                        product: 1,
                        category: 1,
                        quantity: 1,
                        price: 1
                    }
                },
                {
                    $match: {
                        price: { $gt: 200 }  
                    }
                },
                {
                    $group: {
                        _id: "$category",             
                        avgPrice: { $avg: "$price" },
                        totalQuantity: { $sum: "$quantity" } 
                    }
                },
                {
                    $sort: { avgPrice: -1 }          
                }
            ])
        )
    }
    
    /* 
    9. Design a schema for storing shipping address considering 1-1 relationship scenarios for customer and shipping address collections.
        - Insert a document inside customers collection with the following properties:
            - name - string
            - age - number
            - gender - string
            - region - string
        - Insert a document inside shipping address collection with the following properties:
            - _id - ObjectId
            - customerId - the same Id as the customer document
            - street - string
            - city - string
            - state - string
            - postalCode - string
            - country - string
        - if the _id of customer is equal to the cusomerId of the shipping address document, return true, otherwise return false.
    */
    async function oneToOneRelationship(db){
        
        // Insert a customer document
        const customer = await db.collection('customers').insertOne({
            name: "John Doe",
            age: 30,
            gender: "Male",
            region: "North"
        })

        // Insert a shipping address document with the customerId matching the customer's _id
        const address = await db.collection('address').insertOne({
            _id: "id_1234567890",
            customerId: "cus_1234567890",
            street: "123 Main St",
            city: "Makati",
            state: "NCR",
            postalCode: "1649",
            country: "Philippines"
        })

        // Check if the _id of customer matches the customerId of the shipping address
        if (customer.insertedId.equals(address.insertedId)) {
            return true
        } else {
            return false
        }
    }
    
    /* 
    10. Design a schema for storing customer feedback and reviews, considering 1-Many relationship scenarios.
        - Insert a document inside customers collection with the following properties:
            - name - string
            - age - number
            - gender - string
            - region - string
        - Insert a document inside feedbacks collection with the following properties:
            - _id - ObjectId
            - customerId - the same Id as the customer document
            - rating - number
            - comment - string
        - if the _id of customer is equal to the cusomerId of the newly created objects in the feedbacks collection, return true, otherwise return false.
    
    */


        async function insertCustomerFeedbacks(db) {

            const customer1 = await db.customers.findOne({ name: "Customer 1" })
            const customer2 = await db.customers.findOne({ name: "Customer 2" })
          
            
            const feedback1 = {
              _id: "feedback1",
              customerId: customer1._id,
              productId: "productA", 
              rating: 4,
              comment: "Excellent product, very satisfied"
            }
            
            const feedback2 = {
              _id: "feedback2",
              customerId: customer2._id,
              productId: "productA", 
              rating: 5,
              comment: "Amazing quality, highly recommend"
            }
          
            await db.customerfeedback.insertMany([feedback1, feedback2])
            
            
            const insertedFeedback1 = await db.customerfeedback.findOne({ _id: "feedback1" })
            const insertedFeedback2 = await db.customerfeedback.findOne({ _id: "feedback2" })
            
            const isFeedback1Valid = insertedFeedback1.customerId.equals(customer1._id)
            const isFeedback2Valid = insertedFeedback2.customerId.equals(customer2._id)
            
            console.log("Is Feedback 1 Valid", isFeedback1Valid)
            console.log("Is Feedback 2 Valid", isFeedback2Valid)
          }
          
          async function totalRatingPerProduct(db) {
            return await db.customerfeedback.aggregate([
              {
                $group: {
                  _id: "$productId", 
                  totalRating: { $sum: "$rating" } 
                }
              }
            ]).toArray() 
          }
          
          async function averageRatingPerProduct(db) {
            return await db.customerfeedback.aggregate([
              {
                $group: {
                  _id: "$productId", 
                  averageRating: { $avg: "$rating" } 
                }
              }
            ]).toArray() 
          }
          
          async function highestRatedProducts(db) {
            return await db.customerfeedback.aggregate([
              {
                $group: {
                  _id: "$productId", 
                  averageRating: { $avg: "$rating" } 
                }
              },
              {
                $sort: { averageRating: -1 } 
              }
            ]).toArray() 
          }
          
          module.exports = {
            insertCustomerFeedbacks,
            totalRatingPerProduct,
            averageRatingPerProduct,
            highestRatedProducts
          }
          
        async function oneToManyRelationship(db){
        
        }

    
    try{
        module.exports = {
            insertSales,
            insertCustomers,
            totalRevenue,
            revenuePerRegion,
            demographicsByAge,
            orderAverage,
            productPopularity,
            salesOutlier,
            oneToOneRelationship,
            oneToManyRelationship
        };
    } catch(err){
    
    };