class AnimesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    before_action :authorize
    skip_before_action :authorize, only: [:create]


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

    # def update
    #     anime = Anime.find(params[:id])
    #     anime.update(anime_params)
    #     render json: anime, status: :ok
    # end
    def destroy
        Anime.find(params[:id]).destroy
        head :no_content
    end

    # def avgrating
    #     sum = 0
    #     reviews =  Anime.find(params[:id]).reviews
    #     reviews.each{|review| sum += review.rating}
    #     sum.fdiv(reviews.size)
    # end
    private 
    def anime_params
       params.permit([:title, :image, :year, :genre, :summary]) 
    end

    # def authorize
    #     render json: {error: "Please sign in to add a recipe" }, status: :unauthorized unless session.include? :user_id
    # end
    
    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
end
