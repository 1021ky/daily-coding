
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


#
# 時間経過を確認する
#
class TimeElapseObserver
  attr_reader :last_time

  #
  # コンストラクタ
  #
  # @param [int] period 時刻(分)
  #
  def initialize(period: 1)
    @last_time = nil
    @period_sec = 60 * period
  end

  #
  # 受け取った時刻をもとに指定された時刻が経過していたら発火する
  #
  # @param [<Type>] current_time 現在時刻
  #
  def update(current_time)
    if @last_time && (current_time - @last_time >= @period_sec)
      on_elapsed(current_time)
    end
    @last_time = current_time
  end

  def on_elapsed(current_time)
    current_time
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
  time_elapse_observer = TimeElapseObserver.new
  time_signal_notifier = TimeSignalNotifier.new
  provider = TimeProvider.new
  provider.register(time_elapse_observer)
  provider.register(time_signal_notifier)
  provider.start
end