class CommitsController < ApplicationController
  before_action :find_commit, only: [:show, :edit, :update]
  before_action :get_authors, only: [:new, :edit]

  def new
    @commit = Commit.new
  end

  def create
    p params
    commit = Commit.new(commit_params)

    if commit.valid?
      commit.save
      redirect_to commit_path(commit)
    else
      @errors = commit.errors.full_messages
      get_authors
      render 'new'
    end
  end

  def show
  end

  def edit
  end

  def update
    @commit.assign_attributes(commit_params)

    if @commit.valid?
      @commit.save
      redirect_to commit_path(@commit)
    else
      flash[:errors] = @commit.errors.full_messages
      redirect_to edit_commit_path(@commit)
    end
  end

  private

  def commit_params
    params.require(:new_commit).permit(:message, :branch_name, :author_id)
  end

  def find_commit
    @commit = Commit.find_by(id: params[:id])
  end

  def get_authors
    @authors = Author.all
  end
end
