import { Fragment } from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

export const Error500 = ( ): JSX.Element => {
	return (
	  <Fragment>
  
		<Htag tag="h1"> Ошибка 500 </Htag>
  
	  </Fragment>
	);
  };

export default withLayout(Error500);