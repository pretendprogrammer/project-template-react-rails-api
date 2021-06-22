class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login]

    def create
        @user = User.create!(user_params)
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
            render json: { error: invalid.record.errors.full_messages }, status: :not_acceptable
    end

    def index
        users = User.all
        render json: users
    end

    def login
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
            render json: { error: 'Invalid username or password' }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :bio, :image_url, :spirit_color)
    end

    def user_login_params
        params.permit(:username, :password)
    end

end
