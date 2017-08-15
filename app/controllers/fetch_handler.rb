require 'json'
require 'net/http'
require 'uri'
require 'byebug'

class Fetch_Handler < ApplicationController

  def self.url2json
  # Built by LucyBot. www.lucybot.com
    uri = URI("https://api.nytimes.com/svc/topstories/v2/home.json")
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    uri.query = URI.encode_www_form({
    "api-key" => ""
  })
    request = Net::HTTP::Get.new(uri.request_uri)
    @result = JSON.parse(http.request(request).body)
    return @result
  end

  def self.into2db
    data = Fetch_Handler.url2json()
    articles = data["results"]
    articles.each do |article|
      topic = Topic.find_or_create_by(name: article["section"])
      a = Article.find_or_create_by(name: article["title"])
      a.url = article["url"]
      image_url = article["multimedia"].length == 0 ? '' : article["multimedia"].last["url"]
      a.image_url = image_url
      a.date = article["published_date"]
      topic.articles << a
    end
  end


end
