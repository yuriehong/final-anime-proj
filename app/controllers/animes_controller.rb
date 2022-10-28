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

    def topAnimes
        animes = Anime.all
        top = []
        ratings = Hash.new
        sum = 0;

        animes.each {|anime| 
            reviews = anime.reviews;

            if reviews.size == 0
                avgrate= 0
            else

            reviews.each{|review| sum += review.rating};
            avgrate = sum.fdiv(reviews.size);
            end
            ratings[anime] = avgrate;
            
            avgrate =0
            sum =0
        }
        ratings = ratings.sort_by {|k, v| v}.reverse
        # ratings = ratings.slice(0,3)
        ratings.each{|a| top.append(a[0])}
        render json: top, status: :created
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

