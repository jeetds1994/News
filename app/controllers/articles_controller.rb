class ArticlesController < ApplicationController
  def index
    #@data = Fetch_Handler.into2db()
    @articles = Article.all
    render json: @articles
  end
end
