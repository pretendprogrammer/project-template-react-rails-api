class SwapsController < ApplicationController

    def index
        swaps = Swap.all
        render json: swaps, status: :ok
    end

    # def deep_index
    #     swaps = Swap.all
    #     render json: swaps, status: :ok
    # end

    def show
        swap_to_render = Swap.find(params[:id])
        render json: swap_to_render, serializer: DeepSwapSerializer
    end

    # def get_clothings
    #     Clothing.where(swap)
    # end
    
end
