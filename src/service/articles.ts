import { ArticlesT } from '../pages/CreateArticle'
import axios from './axios.config'

export interface Author {
	image: string
	bio: string
	username: string
	following: boolean
}

export interface Article {
	id: string
	slug: string
	title: string
	body: string
	description: string
	favoritesCount: number
	createdAt: string
	updatedAt: string
	favorited: boolean
	author: Author
	tagList: any[]
}

export interface ArticleSlice {
	article: Article
}

export interface IArticles {
	articles: Article[]
	articlesCount: number
}

const ArticleService = {
	async getArticles() {
		const { data } = await axios.get<IArticles>('/articles')

		return data
	},

	async getArticleDetail(slug: string | undefined) {
		const { data } = await axios.get<ArticleSlice>(`/articles/${slug}`)

		return data
	},

	async createArticle(article: ArticlesT) {
		const { data } = await axios.post<ArticleSlice>('/articles', { article })

		return data
	},

	async deleteArticle(slug: string) {
		const { data } = await axios.delete(`/articles/${slug}`)

		return data
	},
}

export default ArticleService
