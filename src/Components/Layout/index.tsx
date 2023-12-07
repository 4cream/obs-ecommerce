import {Props} from '../../interfaces-and-types/index';

function Layout({children}:Props):JSX.Element {
  return (
    <section>
      {children}
    </section>
  )
}

export {Layout}