class AnimesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found


    before_action :authorize
    skip_before_action :authorize, only: [:create, :show]


    def index
        animes = @current_user.animes
        render json: animes, status: :ok
    end

    def show
        anime = Anime.find(params[:id])
        render json: anime, status: :ok
    end

    def create
        anime = Anime.create!(anime_params)
        render json: anime, status: :created
    end

    def destroy
        Anime.find(params[:id]).destroy
        head :no_content
    end

    def avgrating
        sum = 0
        reviews = Anime.find(params[:id]).reviews
        reviews.each{|review| sum += review.rating}
        sum.fdiv(reviews.size)
        render json: sum.fdiv(reviews.size), status: :created
    end


    private 
    def anime_params
       params.permit([:id, :title, :image, :year, :genre, :summary]) 
    end
    
    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
    def not_found
        render json: { error: "Anime not found"}, status: :not_found
    end
end

