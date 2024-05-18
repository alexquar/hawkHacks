require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe "POST /create" do
    it "should create a comment" do
      post "/api/events", params: { description: "description", start_at: DateTime.now, end_at: DateTime.now + 15.minutes }, headers: {"ACCEPT" => "application/json"}
      puts response.body
    end
  end
end