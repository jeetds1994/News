class ArticlesController < ApplicationController
  def index
    Fetch_Handler.into2db()
    render :index
  end
end
