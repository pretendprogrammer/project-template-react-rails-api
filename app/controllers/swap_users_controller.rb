class SwapUsersController < ApplicationController

    def create
        new_swap_user = SwapUser.create!(swap_user_params)
        render json: {message: "SwapUser successfully created"}, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    def current_swap_users
        current_swap_users = SwapUser.where(user_id: params[:currentUserId])
        render json: current_swap_users, status: :ok
    end

    private

    def swap_user_params
        params.permit(:user_id, :swap_id, :credits)
    end

end
