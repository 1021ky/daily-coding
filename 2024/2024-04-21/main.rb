=begin
https://open-meteo.com/ のクライアント
まずは  curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"と同じことを実行する

=end
require 'net/http'

uri = URI('https://api.open-meteo.com/v1/forecast')
params = { :latitude => 52.52, :longitude => 13.41 ,:current => ["temperature_2m","wind_speed_10m"],:hourly => ["temperature_2m", "relative_humidity_2m","wind_speed_10m"]}
uri.query = URI.encode_www_form(params)
res = Net::HTTP.get_response(uri)
puts res.body


