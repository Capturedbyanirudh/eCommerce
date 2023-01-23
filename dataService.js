
const db = require('./db')


// getAllProducts fucntion
const getAllProducts = () => {
    return db.Product.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'Failed to fetch data from database'
                }
            }
        })
}

// add-to-wishlist
const addToWishlist = (id, title, price, description, image) => {
    return db.Wishlist.findOne({
        id
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: 'Product already in your Wishlist'
            };
        }
        else {
            const newProduct = new db.Wishlist({
                id,
                title,
                price,
                description,
                image
            });
            newProduct.save()
            return {
                statusCode: 200,
                message: 'Product successfully added to your Wishlist'
            }

        }
    })
}


// getWishlist fucntion
const getWishlist = () => {
    return db.Wishlist.find()
        .then((data) => {
            if (data) {
                return {
                    statusCode: 200,
                    result: data
                };
            }
            else {
                return {
                    statusCode: 404,
                    message: 'Your Wishlist is empty'
                };
            }
        })
}

// deleteItemWishlist
const deleteItemWishlist=(id)=>{
    return db.Wishlist.deleteOne({
        id
    })
    .then((data) => {
        if (data) {
            // return {
            //     statusCode: 200,
            //     message: 'Product removed from wishlist'
            // };
            return db.Wishlist.find()              //after adding to cart wishlist is reloaded so content after deletion is displayed
            .then((data) => {
                if (data) {
                    return {
                        statusCode: 200,
                        wishList: data,
                        message: 'Product removed from wishlist'
                    };
                }
                else {
                    return {
                        statusCode: 404,
                        message: 'Your Wishlist is empty'
                    };
                }
            })
        }
        else {
            return {
                statusCode: 404,
                message: 'Product not Available'
            };
        }
    }

    )
}

module.exports = {
    getAllProducts,
    addToWishlist,
    getWishlist,
    deleteItemWishlist

}