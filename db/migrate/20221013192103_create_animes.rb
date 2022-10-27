class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :image
      t.string :genre
      t.string :summary

      t.timestamps
    end
  end
end
