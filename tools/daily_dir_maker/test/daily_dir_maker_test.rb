# frozen_string_literal: true

require 'minitest/autorun'
require_relative "test_helper"

describe DailyDirMaker do

  describe "when there is no directory" do
    after 'clean dir' do
      Dir.delete '2025-03-12' if Dir.exist? '2025-03-12'
    end
    it "daily directory is to be make" do
      expected = Time.now.strftime('%Y-%m-%d')

      Time.stub(:now, Time.new(2025, 3, 12)) do
        DailyDirMaker.make
      end

      dirs = Dir.children('.')
      _(dirs).must_include expected
    end
  end
end