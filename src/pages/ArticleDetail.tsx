import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks/useAppDispatch'
import ArticleService from '../service/articles'
import { fetchArticleDetail } from '../store/slices/article'

const ArticleDetail: React.FC = () => {
	const { slug } = useParams()
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(fetchArticleDetail(slug))
	}, [slug])

	return <div>ArticleDetail</div>
}

export default ArticleDetail
