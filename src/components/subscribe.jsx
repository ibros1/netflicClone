import { MdKeyboardArrowRight } from 'react-icons/md';

const Subscribe = () => {
	return (
		<div className='mx-auto  flex max-w-[600px] flex-col'>
			<p className='my-4 text-center text-lg'>
				Ready to watch? Enter your email to create or restart your membership.
			</p>
			<div className='m-2 flex  flex-col  sm:flex-row sm:space-y-0 '>
				<input
					type='email'
					placeholder='Email address'
					className='mx-2  w-[95%] px-8 py-5 text-white outline-none sm:w-full sm:min-w-[400px] sm:px-5 bg-[#0000007A]  border-2 border-[#0F3DAB] rounded-lg'

				/>

				<button className='mt-2 mx-auto flex w-[95%] items-center justify-center bg-[#E40914] hover:bg-[#AB0F17] py-4 text-2xl sm:w-full rounded'>
					Get Started
					<MdKeyboardArrowRight className='h-8 w-8' />
				</button>
			</div>
		</div>
	);
};

export default Subscribe;
