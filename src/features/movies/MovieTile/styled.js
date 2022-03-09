import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../images/star.svg"

export const StyledMovieTile = styled.article`
  max-width: 324px;
  min-height: 650px;
  background: ${({ theme }) => theme.colors.white};
  padding:16px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  margin:auto;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    min-height: 200px ;

  }
`
export const MovieTileImage = styled.img`
  width: 292px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 114px;
  }
`
export const MovieTileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const MovieTileTitle = styled.header`
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 16px;
    margin-bottom: 4px;
  }
`

export const MovieTileSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkergrey};
  font-size: 16px;
  font-weight: 400;
  margin: 4px 0 8px;
  line-height: 1.5 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    line-height: 1.3;
  }
`
export const MovieTileTags = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 8px -4px;
`

export const MovieTileTag = styled.li`
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 8px 16px;
  margin: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1.1;
  }
`

export const MovieTileRating = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
      flex-grow: 0;
      align-items: flex-start;


  }
`
export const MovieTileIcon = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.yellow};
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    width: 16px;
    line-height: 1.3;
  }
`

export const MovieTileRate = styled.span`
  font-weight: 600;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    margin-left: 8px;
  }
`

export const MovieTileVotes = styled.span`
  color: ${({ theme }) => theme.colors.darkergrey};
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}){
    font-size: 13px;
    margin-left: 8px;
  }
`
