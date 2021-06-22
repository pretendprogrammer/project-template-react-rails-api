class ClothingsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :clothing_not_found
before_action :find_clothing, only: [:show, :destroy, :update]

    def destroy
        @clothing.destroy
        render json: {}, status: :accepted
    end

    def show
        render json: @clothing
    end

    def update
        @clothing.update(clothing_params)
        render json: @clothing, status :accepted
    end

    def index_user_clothings
        user_clothings = Clothing.where(user_id: params[:user_id])
        render json: user_clothings, each_serializer: ClothingsIndexSerializer
    end

    private

    def find_clothing
        @clothing = Clothing.find(params[:id])
    end

    def clothing_not_found
        render json: {error: 'Clothing not found'}, status: :not_found
    end

    def clothing_params
        params.permit(:name, :color, :brand, :category, :image_url, :condition, :description, :size, :value)
    end
end
