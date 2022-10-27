class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
     users = User.all
     render json: users, status: :ok
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end
    def me
        render json: @current_user, status: :ok
    end

    private
    def user_params
        params.permit(:name, :username,:email, :password)
    end
end
