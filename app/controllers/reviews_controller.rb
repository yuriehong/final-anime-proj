class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found


    before_action :authorize
    skip_before_action :authorize, only: [:create,:destroy]

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created

    end

    def destroy
        Review.find(params[:id]).destroy
        head :no_content
    end

    def update
        review = Review.find(params[:id])
        review.update(review_params)
        render json: review, status: :ok
    end

    private 
    def review_params
       params.permit([:rating, :comment, :anime_id, :user_id]) 
    end

    def not_found
        render json: { error: "Review not found"}, status: :not_found
    end
    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
end
