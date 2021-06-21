class SwapsController < ApplicationController

    def index
        swaps = Swap.all
        render json: swaps, status: :ok
    end
end
