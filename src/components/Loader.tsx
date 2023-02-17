import React from 'react'

const Loader: React.FC = () => {
	return (
		<div className='loader'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				width='20px'
				height='20px'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
			>
				<circle
					cx='50'
					cy='50'
					fill='none'
					stroke='#85a2b6'
					strokeWidth='10'
					r='35'
					stroke-dasharray='164.93361431346415 56.97787143782138'
				>
					<animateTransform
						attributeName='transform'
						type='rotate'
						repeatCount='indefinite'
						dur='1s'
						values='0 50 50;360 50 50'
						keyTimes='0;1'
					></animateTransform>
				</circle>
			</svg>
		</div>
	)
}

export default Loader
