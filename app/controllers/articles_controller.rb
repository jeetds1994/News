class ArticlesController < ApplicationController
  def index
    @data = Fetch_Handler.into2db()
    render json: @data
  end
end
