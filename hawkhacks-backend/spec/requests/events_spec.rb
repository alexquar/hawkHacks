require 'rails_helper'

RSpec.describe "Events", type: :request do
  describe "POST /create" do
    it "should create an event" do
      post "/api/events", params: { title: "title", description: "description", start_at: DateTime.now, end_at: DateTime.now + 15.minutes, theme: "music", longitude: 0.2, latitude: 0.5 }, headers: {"ACCEPT" => "application/json"}
    end
  end
  describe "PUT /update" do
    it "should update an event" do
      @event = Event.create!(title: "blah", description: "bleh", theme: "music")
      put "/api/events/#{@event.id}", params: { title: "new title", description: "new description"}, headers: {"ACCEPT" => "application/json"}
      @event.reload
    end
  end
  describe "GET /index" do
    before(:each) do
      @event1 = Event.create!(title: "1", description: "1", theme: "travel", end_at: DateTime.now + 15.minutes)
      @event2 = Event.create!(title: "2", description: "2", end_at: DateTime.now + 15.minutes)
    end
    it "should get events" do
      get "/api/events", headers: {"ACCEPT" => "application/json"}
      expect(JSON.parse(response.body, symbolize_names: true)[:total]).to eq(2)
    end
    it "should get events filtered by theme" do
      get "/api/events", params: { filter: "travel" }, headers: {"ACCEPT" => "application/json"}
      expect(JSON.parse(response.body, symbolize_names: true)[:total]).to eq(1)
    end
  end
  describe "DELETE /delete" do
    it "should delete a event" do
      @event = Event.create!(title: "blah", description: "bleh")
      delete "/api/events/#{@event.id}", headers: {"ACCEPT" => "application/json"}
    end
  end
  describe "GET /show" do
    it "should show a event" do
      @user = User.create!(email: "fdfd", pass: "fddd")
      puts @user.inspect
      @event = Event.create!(title: "blah", description: "bleh")
      get "/api/events/#{@event.id}", headers: { "ACCEPT" => "application/json"}
    end
  end
end