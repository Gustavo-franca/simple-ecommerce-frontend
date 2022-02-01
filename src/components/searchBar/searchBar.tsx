import React, { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import { Container, StyledButton, StyledInput } from './styles';
import {
  useSearchBarDispatcher,
  useSearchBarState
} from '../../contexts/searchBar';
import { searchProducts } from '../../contexts/searchBar/thunks';
import { useApplicationContext } from '../../contexts/application';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { config } = useApplicationContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isProductListPage = useMemo(() => pathname === '/', [pathname]);
  const { search, products } = useSearchBarState();
  const dispatch = useSearchBarDispatcher();

  useEffect(() => {
    if (!products && isProductListPage)
      dispatch(searchProducts({ config, search }));
  }, [dispatch, search]);

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'SET_SEARCH_STRING',
        payload: event.currentTarget.value
      });
    },
    [dispatch]
  );

  const onClick = useCallback(() => {
    dispatch(searchProducts({ config, search }));
    if (!isProductListPage) {
      navigate({ pathname: '/' });
      return;
    }
  }, [dispatch]);

  return (
    <Container>
      <StyledInput
        placeholder={'Busque produtos ...'}
        onChange={onInputChange}
        value={search}
      />
      <StyledButton onClick={onClick}>
        <img src="/icons/searchIcon.svg" alt="search icon" />
      </StyledButton>
    </Container>
  );
};
export default SearchBar;
