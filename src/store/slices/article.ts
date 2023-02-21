import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Status } from './auth'
import ArticleService, { Article } from '../../service/articles'

export const fetchArticles = createAsyncThunk<Article[]>(
	'article/fetchArticles',
	async () => {
		const data = await ArticleService.getArticles()

		return data.articles
	},
)

interface IArticleSlice {
	articles: Article[]
	status: Status
}

const initialState: IArticleSlice = {
	articles: [],
	status: Status.IDLE,
}

const ArticleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchArticles.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(
			fetchArticles.fulfilled,
			(state, action: PayloadAction<Article[]>) => {
				state.status = Status.SUCCESS
				state.articles = action.payload
			},
		)
		builder.addCase(fetchArticles.rejected, state => {
			state.status = Status.ERROR
			state.articles = []
		})
	},
})

export default ArticleSlice.reducer
