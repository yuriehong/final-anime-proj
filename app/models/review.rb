class Review < ApplicationRecord
    belongs_to :anime
    belongs_to :user

    validates :rating, presence: true, inclusion: 1..10

end
