
#
# 時刻を取得する
#
class TimeProvider
  def initialize
    @observers = []
  end

  def register(observer)
    @observers << observer
  end

  def unregister(observer)
    @observers.delete(observer)
  end

  def notify(time)
    @observers.each { |obs| obs.update(time) }
  end

  def start
    loop do
      current_time = Time.now
      notify(current_time)
      sleep 1
    end
  end
end

# 経過したことに応じた時報を行う Observer
class TimeSignalNotifier
  def update(current_time)
    notify(current_time) if minute_elapsed?(current_time)
  end

  def minute_elapsed?(current_time)
    current_time.sec == 0
  end

  def notify(current_time)
    puts "#{current_time.strftime("%H:%M")}です。"
  end
end

if __FILE__ == $PROGRAM_NAME
  time_signal_notifier = TimeSignalNotifier.new
  provider = TimeProvider.new
  provider.register(time_signal_notifier)
  provider.start
end