import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Status } from './auth'
import ArticleService, { Article, ArticleSlice } from '../../service/articles'
import { ArticlesT } from '../../pages/CreateArticle'

export const fetchArticles = createAsyncThunk<Article[]>(
	'article/fetchArticles',
	async () => {
		const data = await ArticleService.getArticles()

		return data.articles
	},
)

export const fetchArticleDetail = createAsyncThunk<Article, string | undefined>(
	'article/fetchArticleDetail',
	async slug => {
		const data = await ArticleService.getArticleDetail(slug)

		return data.article
	},
)

export const fetchArticleCreate = createAsyncThunk<Article, ArticlesT>(
	'article/fetchArticleCreate',
	async article => {
		const data = await ArticleService.createArticle(article)

		return data.article
	},
)

interface IArticleSlice {
	articles: Article[]
	status: Status
	article: Article
}

const initialState: IArticleSlice = {
	articles: [],
	status: Status.IDLE,
	article: {} as Article,
}

const ArticleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// ? GetArticles
		builder.addCase(fetchArticles.pending, state => {
			state.status = Status.LOADING
			state.articles = []
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
		// ? GetArticleDetail
		builder.addCase(fetchArticleDetail.pending, state => {
			state.status = Status.LOADING
			state.article = {} as Article
		})
		builder.addCase(
			fetchArticleDetail.fulfilled,
			(state, action: PayloadAction<Article>) => {
				state.status = Status.SUCCESS
				state.article = action.payload
			},
		)
		builder.addCase(fetchArticleDetail.rejected, state => {
			state.status = Status.ERROR
			state.article = {} as Article
		})
		// ? CreateAricle
		builder.addCase(fetchArticleCreate.pending, state => {
			state.status = Status.LOADING
			state.article = {} as Article
		})
		builder.addCase(
			fetchArticleCreate.fulfilled,
			(state, action: PayloadAction<Article>) => {
				state.status = Status.SUCCESS
				state.article = action.payload
			},
		)
		builder.addCase(fetchArticleCreate.rejected, state => {
			state.status = Status.ERROR
			state.article = {} as Article
		})
	},
})

export default ArticleSlice.reducer
