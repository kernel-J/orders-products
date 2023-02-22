module Api
  class ProductsController < ApplicationController
    def index
      product = Product.new
      
      render json: product.all
    end
  end
end