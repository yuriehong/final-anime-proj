class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :comment
      t.integer :anime_id
      t.integer :user_id

      t.timestamps
    end
  end
end
