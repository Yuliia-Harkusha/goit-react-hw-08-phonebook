import { RevolvingDot } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <RevolvingDot
        height="100"
        width="100"
        radius="30"
        color="#1bb1e2"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        // radius="5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};
