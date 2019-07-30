class ResponsesController < ApplicationController

    before_action :define_question, :define_response

    def new
      p session
      p session[:sumpn_brand_new].class
      p session[:test]
      puts "**********"
      flash[:last_answer] ||= ""
      @last_answer = flash[:last_answer]
      get_number_correct
    end

    def clear_game
      session[:number_correct] = 0
      flash[:last_answer] = nil
      redirect_to '/random-question'
    end

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
      session[:sumpn_brand_new] = Question.find(24)
        # if !session[:number_correct]
          session[:number_correct] ||= 0
        # end
        response = Response.create(response_params)
        if response.question.correct_answer == response.answer
            session[:number_correct] += 1
            flash[:last_answer] = "Correct"
        else
            flash[:last_answer] = "Incorrect"
        end
        redirect_to '/random-question'
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end

    def get_number_correct
      @number_correct = session[:number_correct]
    end

end
