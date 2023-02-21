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
	createdAt: Date
	updatedAt: Date
	favorited: boolean
	author: Author
	tagList: any[]
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
}

export default ArticleService
