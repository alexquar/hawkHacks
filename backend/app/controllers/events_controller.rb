class EventsController < ApplicationController
  #before_action :authenticate_user!

  def create
    #TODO: set user to current user
    @event = Event.create!(description: params[:description], start_at: params[:start_at], end_at: params[:end_at])
    render "events/show", status: :created
  end
end