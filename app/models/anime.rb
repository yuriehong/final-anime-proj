class Anime < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

end
