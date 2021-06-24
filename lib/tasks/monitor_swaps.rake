desc 'This task will check all swaps every minute, to see if they have finished, and assign leftover clothings if neseccary.'
task :monitor_swaps => :environment do

    def check
        puts 'checking...'
        Swap.all.each do |swap|
            if swap.end < Time.zone.now
                # reassign id's back to users, delete swaps
                byebug
            end
        end
    end
    check()

    # loop do
    #     sleep(3)
    #     check()
    # end

end
