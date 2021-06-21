class ClothingsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :clothing_not_found

    def destroy
        find_clothing.destroy
        render json: {}, status: :accepted
    end

    private

    def find_clothing
        Clothing.find(params[:id])
    end

    def clothing_not_found
        render json: {error: 'Clothing not found'}, status: :not_found
    end
end
