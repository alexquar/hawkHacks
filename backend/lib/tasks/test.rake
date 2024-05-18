namespace :test do
  task :run, [] => [:environment] do |t, args|
    user = User.all.first
    event = Event.create!(user: user, description: "this is an event", start_at: DateTime.now, end_at: DateTime.now + 15.minutes)
    puts event.inspect
    puts "HI"
    puts user.events.count
    puts user.events.first
  end
end
