class EventsController < ApplicationController
  before_action :current_user, only: [:create, :delete]
  def create
    @event = Event.create!(user: @user, title: params[:title], description: params[:description], start_at: DateTime.parse(params[:start_at]), end_at: DateTime.parse(params[:end_at]), theme: params[:theme], longitude: params[:longitude], latitude: params[:latitude])
    render "events/show", status: :created
  end

  def index
    @events = Event.all.where("end_at >= ?", DateTime.now)
    puts params
    puts @events
    if params[:filter].present?
      puts "present"
      @events = @events.where(theme: params[:filter])
      puts @events
    end
    @total = @events.count
    render "events/index"
  end

  def update
    @event = @user.events.find_by!(id: params[:id])
    @event.update!(title: params[:title], description: params[:description], start_at: params[:start_at], end_at: params[:end_at], theme: [:theme])
    render "events/show"
  end

  def show
    @event = Event.find_by!(id: params[:id])
    render "events/show"
  end

  def delete
    @event = @user.events.find_by!(id: params[:id])
    @event.destroy!
    head :ok
  end

  private

  def current_user
    @user = User.find_by!(id: params[:user_id])
  end
end