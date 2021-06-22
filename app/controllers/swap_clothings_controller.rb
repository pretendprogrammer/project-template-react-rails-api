class SwapClothingsController < ApplicationController

    def create
        new_swap_clothing = SwapUser.create!(swap_clothing_params)
        render json: new_swap_clothing, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    private

    def swap_clothing_params
        params.permit(:clothing_id, :swap_id, :prev_owner_id)
    end

end
