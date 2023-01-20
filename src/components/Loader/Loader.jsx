import { Vortex } from 'react-loader-spinner';

export const Loader = () => {
  return (
      <Vortex
        visible={true}
        height="10%"
        width="10%"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
  );
};

export default Loader;
