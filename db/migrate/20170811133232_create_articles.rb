class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :name
      t.string :url
      t.string :image_url
      t.string :date
      t.integer :topic_id
      t.timestamps
    end
  end
end
