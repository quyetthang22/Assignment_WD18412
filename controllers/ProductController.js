import Product from "../models/Product.js";

class ProductController {
    async getList(req,res){
        try {
            const products = await Product.find();
            res.status(200).json({
                message: "Lấy danh sách thành công",
                data: products
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    };

    async getDetail(req,res) {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            if(!product) {
                return res.status(404).json({
                    message: "không tìm thấy sản phẩm"
                })
            }

            res.status(200).json({
                message: "thành công",
                data: product,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async create(req,res) {
        try {
            const data = req.body;
            const newProduct = await Product.create(data);
            res.status(201).json({
            message: "Thành công",
            data: newProduct,
        })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
        
    }

    async update(req,res) {
        try {
            const data = req.body;
            const id = req.params.id;
            const updateProduct = await Product.findByIdAndUpdate(id, data);

            if(!updateProduct) {
                res.status(404).json({
                    message: "not found"
                })
            }
                res.status(201).json({
                message: "Thành công",
                data: updateProduct,
        })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async delete(req,res) {
        try {
            const id = req.params.id;
            const product = await Product.findByIdAndDelete(id);

            if(!product) {
                return res.status(404).json({
                    message: "Not found"
                })
            }

            res.status(200).json({
                message: "thành công"
            })
        } catch {
            res.status(400).json({
                message: error.message
            })
        }
    }
}

export default ProductController;