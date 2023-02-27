module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.where("ProductStatus": "Active").order("ProductOrder")
      
      render json: @products, status: :ok
    end

    def update
      @product = Product.find(product_params[:id])
      @product.assign_attributes({ProductOrder: product_params[:product_order]})

      if @product.save
        head(:ok)
      else
        render json: { error: 'could not save product order' }, status: :bad_request
      end
    end

    private

    def product_params
      params.require(:product).permit(:id, :product_order)
    end 
  end
end