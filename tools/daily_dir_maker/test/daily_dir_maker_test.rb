# frozen_string_literal: true

require 'minitest/autorun'
require_relative "test_helper"

describe DailyDirMaker do

  describe "when there is no directory" do
    it "daily directory is to be make" do
      expected = Time.now.strftime('%Y-%m-%d')

      DailyDirMaker.make

      dirs = Dir.children('.')

      _(dirs).must_include expected

      Dir.delete(expected)
    end
  end
end