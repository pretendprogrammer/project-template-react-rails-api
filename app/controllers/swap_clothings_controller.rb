class SwapClothingsController < ApplicationController

    def create
        swap_id = params[:swap_id]
        params[:array].each do |clothing|
            new_swap_clothing = SwapClothing.create!(clothing_id: clothing[:id], prev_owner_id: clothing[:user_id], swap_id: swap_id)
        end
            render json: {message: "SwapClothings successfully created"}, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    private

    def swap_clothing_params
        params.require(:array).permit(:id, :user_id)
        params.permit(:swap_id)
    end

end
